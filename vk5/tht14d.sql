delimiter //

create procedure LisaaSuoritus (
    En varchar(45),
    Sn varchar(45),
    KK varchar(45),
    Arvos int
)

silmukka:begin

declare oid int default 0;
declare kid int default 0;

select idOpiskelija into oid from Opiskelija where Etunimi = En and Sukunimi = Sn;

if oid = 0 then
    select 'Opiskelijaa ei ole olemassa';
    leave silmukka;
end if;


select idOpintojakso into kid from Opintojakso where Koodi = KK;

if kid = 0 then
    select 'Opintojaksoa ei ole olemassa';
    leave silmukka;
end if;

if Arvos < 0 or Arvos > 5 then
    select 'Virheellinen arvosana';
    leave silmukka;
end if;

insert into Arviointi values (null, curdate(), Arvos, oid, kid);

end; //

delimiter ;