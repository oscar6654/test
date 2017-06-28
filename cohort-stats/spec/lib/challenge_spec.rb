describe "Challenge" do
  let(:challenge1) { Challenge.new("BLAHBLAH", "RSPEC TEST IS BORING") }

  describe "#submittable?" do
    it "should always return true" do
      expect(challenge1.submittable?).to eq(true)
    end
  end

end
