class WelcomeController < ActionController::Base
  require 'httparty'

  # red
  # blue
  # siena
  # lucca
  def index
    # smile
    # giggle 
    logger.debug('---> hely')
    mysqs = AWS::SQS.new({access_key_id:ENV['AWS_ACCESS_KEY_ID'], secret_access_key:ENV['AWS_SECRET_ACCESS_KEY']})
    logger.info("---> aws 3: #{mysqs.queues.inspect}")
    logger.info("---> aws 4: #{mysqs.queues.first.inspect}")
    @resp = HTTParty.get('http://api.openweathermap.org/data/2.5/forecast?lat=38&lon=-122')
    logger.info("---> weather 2: #{@resp.code.inspect}") 
    logger.info("---> weather 3: #{@resp.message.inspect}") 
    logger.info("---> weather 4: #{@resp.headers.inspect}") 
    logger.info("---> weather 5: #{@resp.body.inspect}") 
  end
  # aahhhh
  # yahoo
end
