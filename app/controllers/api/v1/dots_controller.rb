module Api
  module V1
    class DotsController < ApplicationController
      respond_to :json
      def index
        respond_with Dot.all
      end

      def show
        respond_with Dot.find(params[:id])
      end

      def rig
        respond_with Dot.find_all_by_rig_id(params[:rig_id]).to_a
      end

      def create
=begin
        this works
        curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d 
        '{"dot": {"collection_status":"collecting", "distance":"3.5","driver_firstname":"barack",
        "driver_lastname":"obama","lat":"37.877","lon":"-122.275","rig_id":"FU801","timeZoneOffset":"-8",
        "timestamp":"2014-08-13T16:25:22Z","version":"9.0.0"}}'  http://localhost:3000/api/v1/dots
=end
        current_time = params[:dot][:timestamp].to_time
        current_time_in_utc = current_time - params[:dot][:timeZoneOffset].to_i.hours
        params[:dot][:timestamp] = current_time_in_utc
        dot = Dot.create(params[:dot])
        respond_with :api, :v1, dot
      end      
    end
  end
end