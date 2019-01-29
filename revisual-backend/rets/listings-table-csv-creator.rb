require 'csv'

target = 'sample_data/listing-row.xml'
@csv_name = 'test_sample.csv'


text = File.readlines(target).each do |line|

    #--------------------------  isolates required columns
    value01 = line.rpartition(/"Municipality_code"=>"(.*?)"/)
    value02 = line.rpartition(/"Dom"=>"(.*?)"/)
    value03 = line.rpartition(/"Lp_dol"=>"(.*?)"/)
    value04 = line.rpartition(/"Sp_dol"=>"(.*?)"/)
    value05 = line.rpartition(/"ResidentialProperty"=>"(.*?)"/)
    value06 = line.rpartition(/"S_r"=>"(.*?)"/)
    value07 = line.rpartition(/"Cd"=>"(.*?)"/)
    value08 = line.rpartition(/"Input_date"=>"(.*?)"/)

    #----------------------------  separating keys from value. array 0 provides key, array 1 provides =>, array 2 provides value

    nvalue01 = value01[1].rpartition(/=>/)  #municipality_code
    nvalue02 = value02[1].rpartition(/=>/)  #Dom
    nvalue03 = value03[1].rpartition(/=>/)  #Lp_dol  
    nvalue04 = value04[1].rpartition(/=>/)  #Sp_dol
    nvalue05 = value05[1].rpartition(/=>/)  #Residential Property
    nvalue06 = value06[1].rpartition(/=>/)  #S_r
    nvalue07 = value07[1].rpartition(/=>/)  #Cd
    nvalue08 = value08[1].rpartition(/=>/)  #Input_data

    fvalue01 = nvalue01[2].rpartition(/\./) #municipality_code 

    #-------------------------- 
    if (nvalue01[2] == "\"01.C01\"")
        nvalue01[2].gsub!(/01.C01/, "3")
    elsif (nvalue01[2] == "\"01.C14\"")
        nvalue01[2].gsub!(/01.C14/, "1")
    elsif (nvalue01[2] == "\"01.W01\"")
        nvalue01[2].gsub!(/01.W01/, "2")
    else
        puts "no mun code change"
    end

    #--------------------------- OLD; REMOVE cleaning values prior to conversion to CSV (removing quotes and cleaning type)
    
    # nvalue01[2] = nvalue01[2].gsub!('"', '')
    
    # nvalue02[2] = nvalue02[2].gsub!('"', '')
    # nvalue02[2] = nvalue02[2].to_i
    
    # nvalue03[2] = nvalue03[2].gsub!('"', '')
    if (nvalue03[2] == "\"\"") 
    #     nvalue03[2].to_f
    # else 
        nvalue03[2] = nil
    end
    
    # nvalue04[2] = nvalue04[2].gsub!('"', '')
    if (nvalue04[2] == "\"\"") 
    #     nvalue04[2].to_f
    # else 
        nvalue04[2] = nil
    end 

    # nvalue06[2] = nvalue06[2].gsub!('"', '')
    
    # nvalue07[2] = nvalue07[2].gsub!('"', '')
    if (nvalue07[2] == "\"\"") 
    #     nvalue07[2]
    # else 
        nvalue07[2] = nil
    end 
    
    # nvalue08[2] = nvalue08[2].gsub!('"', '')
    

    #------------------------- setup for array. Will be used in CSV.
    arrayRow = [nvalue01[2],nvalue02[2],nvalue03[2],nvalue04[2],'ResidentialProperty',nvalue06[2],nvalue07[2],nvalue08[2]]
    
    #-------------------------- used for testing array is conforming to type and format requirement
    # puts arrayRow
    puts nvalue01
    

    #-------------------------- writes values to CSV. FIX REQUIRED - MISSING MUNICIPALITY_ID FK

    def is_writing_necessary(municipality_code, row)
        if ( municipality_code === "\"1\"" || municipality_code === "\"2\"" || municipality_code === "\"3\""  )
            write_to_csv(row)
        else
            # puts "no matching municipalities"
        end
    end

    def write_to_csv(row)
        if csv_exists?
            CSV.open(@csv_name, 'a+') { |csv| csv << row }
        else
            header = ["municipality_id", "days_on_market", "sold_price", "type", "sale_lease", "sold_date", "list_date", "create_at", "updated_at"]
            # create and add headers if doesn't exist already
            CSV.open(@csv_name, 'wb') do |csv|
                csv << header
                csv << row
            end
        end
    end
    
    def csv_exists?
        @exists ||= File.file?(@csv_name)
    end

    #---------------------------- execute

    # puts "execute write_to_csv"
    is_writing_necessary(nvalue01[2], arrayRow)
    # puts "write_to_csv is ended"

end
