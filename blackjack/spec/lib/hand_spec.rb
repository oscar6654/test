require "spec_helper"

RSpec.describe Hand do

  let(:cards) { [Card.new(10, "diamonds"), Card.new(3, "hearts")]}

  describe ".new" do
    it "should return an array of objects" do
      test_hand = Hand.new(cards)
      expect(test_hand.cards[0].value).to eq(10)
      expect(test_hand.cards[1].suit).to eq("hearts")
    end
  end
end
