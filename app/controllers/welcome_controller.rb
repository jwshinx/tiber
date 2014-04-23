class WelcomeController < ActionController::Base
  def index
    logger.debug('---> hely')
    mysqs = AWS::SQS.new({access_key_id:ENV['AWS_ACCESS_KEY_ID'], secret_access_key:ENV['AWS_SECRET_ACCESS_KEY']})
    logger.info("---> aws 3: #{mysqs.queues.inspect}")
    logger.info("---> aws 4: #{mysqs.queues.first.inspect}")
  end
end
