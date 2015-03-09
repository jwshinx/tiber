class MapsController < ApplicationController
  layout 'maps'

  def rome
  end

  def coordinates
      #  { ts: '2222',
    @data = RawCrime
      .all
      .map do |c| 
        { ts: c.timestamp.to_date.to_s,
          latitude: c.latitude, 
          longitude: c.longitude
        }
      end
    puts "---> c: #{@data.inspect}"

    render json: @data
  end
end