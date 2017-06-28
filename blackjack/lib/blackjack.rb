require_relative "card"
require_relative "deck"
require_relative "hand"
require 'pry'


class Blackjack

  def initialize
    puts "Welcome to Blackjack!"
    @deck = Deck.new
    @dealer_hand = Hand.new
    @player_hand = Hand.new
  end


  def play_a_hand
    shuffle_deal_initial_hand
    dealer_down_card
    hit_or_stand_loop
    play_out_dealer_hand
    announce_hand_result
  end

  def shuffle_deal_initial_hand
    @deck.shuffle
    card = @deck.get_card
    @player_hand.accept_card(card)
    puts "Player was dealt #{card.to_s}"
    card = @deck.get_card
    @player_hand.accept_card(card)
    puts "Player was dealt #{card.to_s}"
    puts "Player score: #{@player_hand.score}"
  end

  def dealer_down_card
    card = @deck.get_card
    @dealer_hand.accept_card(card)
    puts "Dealer is showing #{card.to_s}"
  end

  def hit_or_stand_loop
    prompt = "(H/S): "
    puts "Hit or stand? "

    print prompt

    while user_input = gets.chomp # loop while getting user input
      user_input.downcase

      case user_input
      when "h"
        card = @deck.get_card
        @player_hand.accept_card(card)
        puts ""
        puts "Player was dealt #{card.to_s}"
        puts "Player score: #{@player_hand.score}"
        puts "Hit or stand? "
        print prompt
      when "s"
        break
      else
        puts "Please select either H or S"
        print prompt # print the prompt, so the user knows to re-enter input
      end
    end


  end

  def play_out_dealer_hand
    while @dealer_hand.score < 17
      card = @deck.get_card
      @dealer_hand.accept_card(card)
      puts "Dealer was dealt #{card.to_s}"
      puts "Dealer score: #{@dealer_hand.score}"
    end
    puts "Dealer stands on #{@dealer_hand.score}"
  end

  def announce_hand_result
    if @player_hand.score > 21
      puts "Player busts! Dealer wins hand."
    elsif @dealer_hand.score > 21
      puts "Dealer busts! Player wins hand."
    elsif (@player_hand.score > @dealer_hand.score)
      puts "Player wins the hand!"
    elsif (@dealer_hand.score > @player_hand.score)
      puts "Dealer wins the hand."
    else
      puts "Dealer and player push."
    end
  end

end

game = Blackjack.new
game.play_a_hand




# b = Deck.new
# # player = Hand.new(b)
# # g = b.deal
# player_hand_card = []
# dealer_hand_card = []
# # 2.times do |counter|
# #   player_hand_card.push(b.deal)
# #   dealer_hand_card.push(b.deal)
# # end
# player = Hand.new(player_hand_card)
# dealer = Hand.new(dealer_hand_card)
#
# player_hand_card.push(b.deal)
# puts "Player was dealt Card"
# dealer_hand_card.push(b.deal)
# puts "Dealer was dealt Card"
# player_hand_card.push(b.deal)
# puts "Player was dealt Card"
# dealer_hand_card.push(b.deal)
# puts "Dealer was dealt Card"
# # puts player.cards
# # puts dealer.cards
# # puts player.cards[0].number
# # puts player.cards[1].number
# def calculate_player_value(x_player_card, a:nil)
#   sum = 0
#   x_player_card.each do |in_hands|
#     # if in_hands.value == 'A'
#     #   sum-= 10
#     # end
#     sum += in_hands.number
#   end
#   if a == 1
#     sum-= 10
#   end
#   return sum
# end
# def show_player_value(x_player_card)
#   card_list = []
#   x_player_card.each do |in_hands|
#     card_list.push(in_hands.value)
#   end
#   return card_list
# end
# puts "Player Hand is : #{show_player_value(player.cards)}"
# puts "Player Hand is : #{calculate_player_value(player.cards)}"
#   puts "Dealer Hand is : #{show_player_value(dealer.cards)}"
#   puts "Dealer Hand is : #{calculate_player_value(dealer.cards)}"
# puts "Hit or Stand"
# input = gets.chomp
# done = ''
# while input != "Stand" do
#   player_hand_card.push(b.deal)
#   puts "Player was dealt Card"
#   puts "Player Hand is : #{show_player_value(player.cards)}"
#   puts "Player Hand is : #{calculate_player_value(player.cards)}"
#   puts "Hit or Stand"
#   if calculate_player_value(player.cards) == 21
#     puts "Player Wins"
#     done = 'done'
#     break
#   elsif calculate_player_value(player.cards) > 21
#     input = "Stand"
#     done = 'done'
#     puts "Player Lose"
#     break
#   end
#   input = gets.chomp
# end
# if done != 'done'
# while calculate_player_value(dealer.cards) < 17 do
#   dealer_hand_card.push(b.deal)
#   puts "Dealer was dealt Card"
#   puts "Dealer Hand is : #{show_player_value(dealer.cards)}"
#   puts "Dealer Hand is : #{calculate_player_value(dealer.cards)}"
# end
#
# if show_player_value(dealer.cards).include?("A") && calculate_player_value(dealer.cards) > 21
#   overlow = calculate_player_value(dealer.cards,1)
#   puts "Dealer Hand is : #{show_player_value(dealer.cards)}"
#   puts "Dealer Hand is : #{overflow}"
#   if calculate_player_value(player.cards) == 21
#     puts "Player Wins"
#
#   elsif calculate_player_value(player.cards) > 21
#     puts "Player Lose"
#   elsif overflow > 21
#     puts "Player WIns"
#   end
# end
#
#
# if calculate_player_value(player.cards) == 21
#   puts "Player Wins"
# elsif calculate_player_value(dealer.cards) == 21
#   puts "Player Lose"
# elsif calculate_player_value(player.cards) < calculate_player_value(dealer.cards) && calculate_player_value(dealer.cards) < 21
#   puts "Player Lose"
# elsif calculate_player_value(player.cards) > calculate_player_value(dealer.cards) && calculate_player_value(player.cards) < 21
#   puts "Player WIns"
# elsif calculate_player_value(player.cards) > 21
#   puts "Player Lose"
# elsif calculate_player_value(dealer.cards) > 21
#   puts "Player WIns"
# end
# end

# puts calculate_player_value(dealer.cards)
