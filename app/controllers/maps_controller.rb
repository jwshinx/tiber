class MapsController < ApplicationController
  layout 'maps'

  def rome
  end

  def coordinates
    @data = RawCrime
      .all
      .map do |c| 
        { name: c.address_description, 
          location: { latitude: c.latitude, 
                      longitude: c.longitude }
        }
      end
    puts "---> c: #{@data.inspect}"

    render json: @data
  end
end