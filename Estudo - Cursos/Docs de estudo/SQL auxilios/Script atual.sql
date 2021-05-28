
select * from Events
where events.StartDateTime between 
cast(dateadd(month, - 2, getdate()) - DAY(getdate()) + 1 as date) and 
cast(convert(char(8),EOMONTH(getdate()), 112) + ' 23:59:59.99' as datetime)
