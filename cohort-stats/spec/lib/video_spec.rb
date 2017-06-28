describe "Video" do
  let(:video1) { Video.new("How to be succesful", "Dont learn to code!", "https://www.youtube.com/watch?v=dQw4w9WgXcQ") }

  describe ".new" do
    it "has a reader for url" do
      expect(video1.url).to eq("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    end

    it "does not have a writer for url" do
      expect{ video1.url = "www.google.com" }.to raise_error(NoMethodError)
    end
  end

  describe "#submittable?" do
    it "should always return false" do
      expect(video1.submittable?).to eq(false)
    end
  end

end
