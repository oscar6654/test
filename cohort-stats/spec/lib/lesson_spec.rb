describe "Lesson" do
  let(:rspec) { Lesson.new("Boring Lesson", "this is boring") }

  describe ".new" do
    it "has a reader for name" do
      expect(rspec.name).to eq("Boring Lesson")
    end

    it "has a writer for name" do
      rspec.name = "RSPEC WAT?"
      expect(rspec.name).to eq("RSPEC WAT?")
    end

    it "has a reader for body" do
      expect(rspec.body).to eq("this is boring")
    end

    it "has a writer for body" do
      rspec.body = "writing rspec is tidious"
      expect(rspec.body).to eq("writing rspec is tidious")
    end
  end

  describe "#submittable?" do
    it "should always return false" do
      expect(rspec.submittable?).to eq(false)
    end
  end
end
