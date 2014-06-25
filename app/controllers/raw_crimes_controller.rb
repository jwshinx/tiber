class RawCrimesController < ApplicationController
  before_action :set_raw_crime, only: [:show, :edit, :update, :destroy]

  # GET /raw_crimes
  # GET /raw_crimes.json
  def index
    @raw_crimes = RawCrime.paginate(:page => params[:page], :per_page => 10)
    CrimeWorker.perform_async('yellow')
    CrimeWorker.perform_in(5.minutes.from_now, 'bones')
  end

  # GET /raw_crimes/1
  # GET /raw_crimes/1.json
  def show
  end

  # GET /raw_crimes/new
  def new
    @raw_crime = RawCrime.new
  end

  # GET /raw_crimes/1/edit
  def edit
  end

  # POST /raw_crimes
  # POST /raw_crimes.json
  def create
    @raw_crime = RawCrime.new(raw_crime_params)

    respond_to do |format|
      if @raw_crime.save
        format.html { redirect_to @raw_crime, notice: 'Raw crime was successfully created.' }
        format.json { render :show, status: :created, location: @raw_crime }
      else
        format.html { render :new }
        format.json { render json: @raw_crime.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /raw_crimes/1
  # PATCH/PUT /raw_crimes/1.json
  def update
    respond_to do |format|
      if @raw_crime.update(raw_crime_params)
        format.html { redirect_to @raw_crime, notice: 'Raw crime was successfully updated.' }
        format.json { render :show, status: :ok, location: @raw_crime }
      else
        format.html { render :edit }
        format.json { render json: @raw_crime.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /raw_crimes/1
  # DELETE /raw_crimes/1.json
  def destroy
    @raw_crime.destroy
    respond_to do |format|
      format.html { redirect_to raw_crimes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_raw_crime
      @raw_crime = RawCrime.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def raw_crime_params
      params.require(:raw_crime).permit(:case_number, :description, :timestamp, :beat, :crime_type, :zip, :address_description, :latitude, :longitude, :accuracy, :url, :processed)
    end
end
