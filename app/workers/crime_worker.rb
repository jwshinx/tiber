class CrimeWorker
  include Sidekiq::Worker

  #sidekiq_options :retry => false, :queue => 'fleet_summary'
  sidekiq_options :retry => false

  def perform(info_type)
    Rails.logger.info "crime_worker.perform #{info_type} 5"
    Rails.logger.info "crime_worker.perform #{info_type} 5"
  end
  def perform_in(interval, info_type)
    Rails.logger.info "crime_worker.perform_in #{Time.current.iso8601} #{info_type}"
    Rails.logger.info "crime_worker.perform_in #{interval.iso8601} #{info_type}"
  end
end

