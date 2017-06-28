dinner_total = 178
tip = 20
tip_amount = dinner_total * (tip.to_f / 100)
puts "You should tip $ #{tip_amount.to_f}"
puts "The total bill is $#{tip_amount.to_f + dinner_total}"
