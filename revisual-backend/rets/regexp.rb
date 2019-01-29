string = "The quick 12 brown foxes jumped over the 10 lazy dogs"

p string =~ /quick/
p string =~ /Z/i ? true: false  #i gives option to find lower/upper case
p string.to_enum(:scan, /\d+/).map {Regexp.last_match}