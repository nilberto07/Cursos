select sites.name as Garagem,
drivers.extended_id as DriverId, 
drivers.employee_number + ' - ' +  drivers.name  as Motorista,
assets.registration_number as NumRegistro, 
assets.description as DesVeiculo, 
	   (convert(varchar, events.eventid) + ' - ' + LibraryEvents.Description) as EventId, 
	   LibraryEvents.Description as DescEvento, 
	   count(events.eventid) as Qtd, 
	   cast(events.StartDateTime as date) as DataEvent
from assets, drivers, LibraryEvents, Events, sites
where Events.DriverId = ISNUMERIC(drivers.extended_id)
and LibraryEvents.eventid = Events.eventid
and sites.id = assets.site_id
and assets.id_unit = events.unitId
and events.StartDateTime between cast(getdate() - DAY(getdate()) - 1 as date) and cast(convert(char(8),EOMONTH(getdate()), 112) + ' 23:59:59.99' as datetime)
group by sites.name, drivers.extended_id, drivers.name, drivers.employee_number, events.eventid, 
assets.registration_number, assets.description,
	   LibraryEvents.Description, cast(events.StartDateTime as date)
	   order by cast(events.StartDateTime as date)