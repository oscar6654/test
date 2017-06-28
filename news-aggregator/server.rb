require 'sinatra'
require 'pry'
require 'csv'
require_relative 'app/article.rb'
def array_articles
  articles = []
  CSV.foreach('articles.csv', headers: true) do |row|
    articles << Article.new(row["id"], row["title"], row["url"], row["description"])
  end
  articles
end
get "/" do
  redirect to "/articles"
end
get "/articles" do
  @articles = array_articles
  erb :index
end
get "/article/:article_id" do
  @article_id = params[:article_id]
  # @articles = array_articles
  @article = array_articles.find{|a| a.id == @article_id}
  erb :show
end
get "/articles/new" do
  # @error = nil
  erb :new
end

post "/articles" do
  @title = params['article_title']
  @url = params['article_url']
  @description = params['article_description']
  @error = nil
  if @title == "" || @url == "" || @description == ""
    @error = "PLEASE DO NOT LEAVE BLANKS"
    erb :new
  elsif !@url.include?("www") || !@url.include?(".com")
    @error = "Enter Valid URL starts with www. and ends with .com"
    erb :new
  elsif @description.length < 20
    @error = "Enter description more than 20 or more characters"
    erb :new
  else
    if array_articles.find{|a| a.url == @url}
      @error = "URL already exist!"
      erb :new
    else
      CSV.open('articles.csv', 'a') do |input|
        input << [array_articles.length+1,@title,@url,@description]
      end
      redirect to "/"
    end
  end

end
