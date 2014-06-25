class CrimeWorker
  include Sidekiq::Worker

  #sidekiq_options :retry => false, :queue => 'fleet_summary'
  #sidekiq_options :retry => false

  def perform(info_type)
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
    Rails.logger.info "---> crime_worker.perform #{info_type} 3"
  end
end

