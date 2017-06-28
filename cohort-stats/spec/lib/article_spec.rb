describe "Article" do
  let(:article1) { Article.new("BLAHBLAH", "RSPEC TEST IS BORING") }

  describe "#submittable?" do
    it "should always return false" do
      expect(article1.submittable?).to eq(false)
    end
  end

end
