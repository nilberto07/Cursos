DECLARE @sqlfusoname varchar(255)
DECLARE @carbonfusoname varchar(255)
DECLARE @slug varchar(255)

--Ver id do cliente Select id, database_name From [dbo].[BluStockSystem_groups] g where deleted_at is null

Select @sqlfusoname = f.sql_fuso_name, @carbonfusoname = carbon_fuso_name, @slug = slug
From [dbo].[BluStockSystem_groups] g
Inner Join [dbo].[BluStockSystem_fusolist] f on f.id = g.idfuso
where g.database_name = DB_NAME()


Select 
CAST(SWITCHOFFSET (tripstart, DATENAME(TZ, tripstart AT TIME ZONE @sqlfusoname)) AS DATETIME) tripstart
, CAST(SWITCHOFFSET (tripend, DATENAME(TZ, tripend AT TIME ZONE @sqlfusoname)) AS DATETIME) tripend
, *
From trips 
where  unitid = 9722 
and CAST(SWITCHOFFSET (tripstart, DATENAME(TZ, tripstart AT TIME ZONE @sqlfusoname)) AS DATETIME)
>= '2019-08-19 00:00:00' 
and 
CAST(SWITCHOFFSET (tripend, DATENAME(TZ, tripend AT TIME ZONE @sqlfusoname)) AS DATETIME) 
<= '2019-08-20 23:59:59'
order by CAST(SWITCHOFFSET (tripstart, DATENAME(TZ, tripstart AT TIME ZONE @sqlfusoname)) AS DATETIME) desc

