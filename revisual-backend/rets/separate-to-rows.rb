target = 'listing-row.xml'
newfile_target='torontolisting.xml'

#----------------- separates single row RETS data generated during API pull to individual rows.

text = File.read(target)
    replace = text.gsub(/(\},\s\{)/, "\n")
    
File.open(newfile_target,"w") {|file| file.puts replace}
    
