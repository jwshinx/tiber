require 'test_helper'

class RawCrimesControllerTest < ActionController::TestCase
  setup do
    @raw_crime = raw_crimes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:raw_crimes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create raw_crime" do
    assert_difference('RawCrime.count') do
      post :create, raw_crime: { accuracy: @raw_crime.accuracy, address_description: @raw_crime.address_description, beat: @raw_crime.beat, case_number: @raw_crime.case_number, crime_type: @raw_crime.crime_type, description: @raw_crime.description, latitude: @raw_crime.latitude, longitude: @raw_crime.longitude, processed: @raw_crime.processed, timestamp: @raw_crime.timestamp, url: @raw_crime.url, zip: @raw_crime.zip }
    end

    assert_redirected_to raw_crime_path(assigns(:raw_crime))
  end

  test "should show raw_crime" do
    get :show, id: @raw_crime
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @raw_crime
    assert_response :success
  end

  test "should update raw_crime" do
    patch :update, id: @raw_crime, raw_crime: { accuracy: @raw_crime.accuracy, address_description: @raw_crime.address_description, beat: @raw_crime.beat, case_number: @raw_crime.case_number, crime_type: @raw_crime.crime_type, description: @raw_crime.description, latitude: @raw_crime.latitude, longitude: @raw_crime.longitude, processed: @raw_crime.processed, timestamp: @raw_crime.timestamp, url: @raw_crime.url, zip: @raw_crime.zip }
    assert_redirected_to raw_crime_path(assigns(:raw_crime))
  end

  test "should destroy raw_crime" do
    assert_difference('RawCrime.count', -1) do
      delete :destroy, id: @raw_crime
    end

    assert_redirected_to raw_crimes_path
  end
end
