json.array!(@raw_crimes) do |raw_crime|
  json.extract! raw_crime, :id, :case_number, :description, :timestamp, :beat, :crime_type, :zip, :address_description, :latitude, :longitude, :accuracy, :url, :processed
  json.url raw_crime_url(raw_crime, format: :json)
end
