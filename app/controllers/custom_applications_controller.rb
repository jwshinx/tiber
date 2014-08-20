class CustomApplicationsController < Doorkeeper::ApplicationsController
  before_action :authenticate_user! #, :except => [:show]
  def show
    logger.debug('---> my customer show in custom-app-controller 1')
    logger.debug('---> my customer show in custom-app-controller 2')
  end
  def index
    logger.debug('---> my customer index in custom-app-controller 1')
    super
    logger.debug('---> my customer index in custom-app-controller 2')
  end  
end