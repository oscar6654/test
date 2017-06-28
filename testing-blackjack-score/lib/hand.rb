require_relative 'deck'

class Hand
  def initialize(cards)
    @cards = cards
  end

  def calculate_hand
    total = 0
    @cards.each do |card|
      if card.value.class == Fixnum
        total+= card.value
      elsif card.value.include?('J') || card.value.include?('Q') || card.value.include?('K')
        total += 10
      elsif card.value.include?('A')
        if total <= 10 && card.value.include?('A')
          total += 11
        else
          total += 1
        end
      # else
      #   total += card[0]
      end
    end
    @cards.each do |card|
      if total >= 21 && card.value.include?('A')
        total -= 10
      end
    end
    total
    # Your code here after writing tests
    # Think about what this method needs to do
  end
end

deck = Deck.new
cards = deck.deal(2)
hand = Hand.new(cards)
hand.calculate_hand # Get this working properly
