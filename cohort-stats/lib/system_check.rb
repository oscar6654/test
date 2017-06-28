require_relative "lesson"
class SystemCheck < Lesson
  attr_reader :name, :date
  attr_accessor :submissions
  def initialize(name,date)
    @name = name
    @date = date
    @submissions = []
  end
  def add_submission(submission)
    @submissions.push(submission)
  end
  def average_grade
    total = 0.0
    @submissions.each do |grading|
      total += grading.grade
    end
    (total/@submissions.length)
  end
  def did_student_complete_system_check?(student_name)
    student_submitted = []
    @submissions.each do |name|
      student_submitted.push(name.student)
    end
    student_submitted.include?(student_name)

  end
  def submittable?
    true
  end

end
