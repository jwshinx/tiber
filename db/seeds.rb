# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
20.times do
  x = ('a'..'z').to_a.shuffle[0..7].join
  RawCrime.create(case_number: x, description: x, timestamp: Time.now(),
  	beat: x, crime_type: x, zip: x, address_description: x, 
  	latitude: 1, longitude: 2, accuracy: x, processed: 0)
end