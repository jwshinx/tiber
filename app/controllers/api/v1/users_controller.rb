module Api
  module V1
    class UsersController < BaseController
      doorkeeper_for :all
      respond_to :json
      
      def show
        logger.debug("---> cu: " + current_user.to_s)
        respond_with current_user.as_json(except: :password_digest)
      end

    end
  end
end
