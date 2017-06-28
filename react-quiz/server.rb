require "sinatra"
require "json"
require 'pry'

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

get "/" do
  erb :home
end

get "/api/v1/questions.json" do
  questions = File.read("questions.json")
  #For Exceeds Only
  #Use questions.json to pull a random question for your question data
end
