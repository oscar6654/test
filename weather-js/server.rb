# # A "Proxy API" for accessing DarkSky
#
# require "sinatra"
# require "net/http"
#
# RIOT_API_KEY= "RGAPI-d0fd45da-e7b0-41e6-af9e-261283d91475"
#
# get "/riotgames/:summoner_name" do |name|
#   # @name = [:summoner_name]
#   uri = URI("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/#{name}?api_key=#{RIOT_API_KEY}")
#   return Net::HTTP.get(uri)
# end

require "sinatra"
require "net/http"

DARK_SKY_API_KEY = "f8d49995e88393cc144df80a43a007da"

get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end
