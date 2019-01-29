require 'rets'
require 'date'
require 'nokogiri'

client = Rets::Client.new({
    login_url: 'https://getfiles.torontomls.net/GetFiles/GetArchiveDataFile.ashx',
    username: ENV['RETSUSER'],
    password: ENV['RESSECRET'],
    version: 'RETS/1.7'
  })
  two_years_ago = Date.today - 730
  target = "archive-listing00.xml"



  begin
    client.login
    puts 'client log in successful'
  rescue => e
    puts 'Error: ' + e.message
    exit!
  end
  
  puts 'were now starting properties'

  # begin
    # property = client.find :all,{
    #     no_records_not_an_error: true,
    #     search_type: 'Property',
    #     class: 'free',
    #     query: '(ml_num=N4337890)',
    #     query: '(timestamp_sql=2019-01-25+)',
    #     query: '(archive_file=201501),(area_code=01)',
    #     query_type: 'DMQL2',
    #     format: 'COMPACT',
    #     limit: 2,
        # format: 'STANDARD-XML',
    # }
    # puts property

    # File.open(target, "w+") do |f|
    #   f.write(property)
    # end

  # rescue => e
  #   puts 'Error: ' + e.message
  #   exit!
  # end

  
  

  
  client.logout