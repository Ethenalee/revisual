require 'rets'
require 'date'
require 'nokogiri'

client = Rets::Client.new({
    login_url: 'http://retsau.torontomls.net:6103/rets-treb3pv/server/login',
    username: ENV['RETSUSER'],
    password: ENV['RESSECRET'],
    version: 'RETS/1.7'
  })
  two_years_ago = Date.today - 730
  target = "condo00.xml"



  begin
    client.login
    puts 'client log in successful'
  rescue => e
    puts 'Error: ' + e.message
    exit!
  end
  
  puts 'were now starting properties'

  # begin
    property = client.find :all,{
        no_records_not_an_error: true,
        search_type: 'Property',
        class: 'CondoProperty',
        # query: '(ml_num=N4337890)',
        # query: '(timestamp_sql=2019-01-25+)',
        query: '(Area_code=01),(timestamp_sql=2017-01-29+)',
        query_type: 'DMQL2',
        format: 'COMPACT',
        # format: 'STANDARD-XML',
    }
    # puts property

    puts 'writing file now'

    File.open(target, "w+") do |f|
      f.write(property)
    end

    puts 'logout'
  # rescue => e
  #   puts 'Error: ' + e.message
  #   exit!
  # end

  

  
  client.logout