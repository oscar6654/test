require "simplecov"
SimpleCov.start
require "pry"
require_relative "../code"

# YOUR TEST CODE HERE
RSpec.describe "perimeter" do
  it "returns 20 for a square with a width of 5" do
    expect(perimeter(5)).to eq(20)
  end

  it "returns 30 for a rectangle with a width of 5 and a length of 10" do
    expect(perimeter(5, 10)).to eq(30)
  end
end

RSpec.describe "average" do
  it "returns [5,10,3,2] average of a grade of 5" do
    expect(average([5,10,3,2])). to eq(5)
  end
end

RSpec.describe "rankings" do
  it "returns rank of students in order" do
    expect(rankings(["Ivy,Jesica"])).to eq("1. Ivy,Jesica\n")
  end
end
RSpec.describe "greet" do
  it "returns Hola oscar" do
    expect(greet("oscar","spanish")).to eq("Hola oscar!")
  end
end
