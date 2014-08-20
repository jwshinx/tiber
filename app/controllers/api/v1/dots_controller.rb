module Api
  module V1
    class DotsController < ApplicationController
      #before_action :doorkeeper_authorize!
      skip_before_action :verify_authenticity_token, :only => [:create]
      doorkeeper_for :all
      respond_to :json
      
      def index
        logger.debug("---> " + doorkeeper_token.resource_owner_id.to_s)
        respond_with Dot.all
      end

      def show
        respond_with Dot.find(params[:id])
      end

      def rig
        # deprecated in rails 4: all
        #respond_with Dot.find_all_by_rig_id(params[:rig_id]).to_a
        respond_with Dot.where(:rig_id => params[:rig_id]).to_a
      end

      def create
=begin
        this works
        curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d 
        '{"dot": {"collection_status":"collecting", "distance":"3.5","driver_firstname":"barack",
        "driver_lastname":"obama","lat":"37.877","lon":"-122.275","rig_id":"FU801","timeZoneOffset":"-8",
        "timestamp":"2014-08-13T16:25:22Z","version":"9.0.0"}}'  http://localhost:3000/api/v1/dots

        as ruby

        {"dot"=> {"collection_status"=>"collecting", "distance"=>"3.5","driver_firstname"=>"barack",
          "driver_lastname"=>"obama","lat"=>"37.877","lon"=>"-122.275","rig_id"=>"FU801","timeZoneOffset"=>"-8",
          "timestamp"=>"2014-08-13T16:25:22Z","version"=>"9.0.0"}
        }
=end
        current_time = params[:dot][:timestamp].to_time
        current_time_in_utc = current_time - params[:dot][:timeZoneOffset].to_i.hours
        params[:dot][:timestamp] = current_time_in_utc
        #dot = Dot.create(params[:dot])
        dot = Dot.create(dot_params)
        respond_with :api, :v1, dot
      end
    private
      def dot_params
        params.require(:dot).permit(
          :collection_status, 
          :distance,
          :driver_firstname, 
          :driver_lastname, 
          :lat, 
          :lon, 
          :rig_id, 
          :timeZoneOffset, 
          :timestamp, 
          :version
          )
      end            
    end
  end
end
