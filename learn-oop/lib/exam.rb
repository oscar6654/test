class Exam
  attr_reader :title, :date
  attr_writer :assigned_to
  attr_accessor :grade
  def initialize(title,date)
    @title = title
    @date = date
    @assigned_to = nil
    @grade = nil
  end
end
