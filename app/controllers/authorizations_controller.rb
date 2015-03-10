class AuthorizationsController < Doorkeeper::ApplicationsController
  #before_action :authenticate_user! #, :except => [:show]
  def new
    logger.info('***> my custom new in auth-controller 1')
    logger.info('***> my custom new in auth-controller 2')
  end
  def show 
    logger.info('***> my custom show in auth-controller 1')
    logger.info('***> my custom show in auth-controller 2')
  end
end
