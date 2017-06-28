module PartyGoer
  def initialize
    @sum = 0
  end
  def drink
    # @sum ||= 0
    @sum += 1
    if @sum > 3
      return false
    else
      return true
    end
  end
  def sing
    return "Hello"
  end
  def cause_havoc
    raise PersonalizedHavocError
  end
  def invited?
    return true
  end
end
  #YOUR CODE GOES HERE
  class PersonalizedHavocError < StandardError
    def message
      "You should define this yourself!"
    end
  end
