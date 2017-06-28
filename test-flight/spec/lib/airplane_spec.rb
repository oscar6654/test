require_relative "../../lib/airplane"

describe Airplane do
  let(:my_plane) { Airplane.new("cesna", 10, 150)}
  describe "#initialization" do
    it "returns cesna as plane type" do
      # my_plane = Airplane.new("cesna", 10, 150)
      expect(my_plane.type).to eq("cesna")
    end
  end

  describe "#start" do
    it "returns airplane started when we start it" do
      expect(my_plane.start).to eq("airplane started")
    end
  end

  describe "#land" do
    it "returns airplane not started yet" do
      expect(my_plane.land).to eq("airplane not started, please start")
    end
  end

  describe "#takeoff" do
    it "airplane has not started, please start" do
      expect(my_plane.takeoff).to eq("airplane has not started, please start")
    end
  end
end
