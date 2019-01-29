require 'rets'
require 'date'
require 'nokogiri'


#----------------- RETS client 

client = Rets::Client.new({
    login_url: 'http://retsau.torontomls.net:6103/rets-treb3pv/server/login',
    username: ENV['RETSUSER'],
    password: ENV['RETSSECRET'],
    version: 'RETS/1.7'
  })
  two_years_ago = Date.today - 730
  


#------------------ execute login
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
  class: 'ResidentialProperty',
  # query: '(ml_num=N4337890)',
  # query: '(timestamp_sql=2019-01-25+)',
  query: '(Area_code=01)',
  query_type: 'DMQL2',
  format: 'COMPACT',
  limit: 2
  # format: 'STANDARD-XML',
}
# puts property

target = "listing00.txt"

File.open(target, "w+") do |f|
  f.write(property)
end

# rescue => e
#   puts 'Error: ' + e.message
#   exit!
# end

  

  
client.logout