# Steps

### Create A new Web API Project
```
dotnet new webapi -o ProjectName
```

### Say yes to Create launch file in VSCode
- This will create the .vscode launch file 
- Then press _Ctrl + F5_ to run the project
- Then in the automatically opened browser go to the pre entered *ulr/swagger* to see the weatherforecast API running (Try it out if you want - check for Status 200) 

### Setup SQL
1. Open MySQL Workbench
2. Create A New Connection
3. In the new connection create a new schema
4. Forward engineer the schema into a file OR Open existing sql script and run it to create relevant tables remember this file name or database name

### Add Connection String =>
- Go to appsettings.json and add the following Code
```
{
    ...
    ...
    "Allowed..." ..., // The Comma Here is important
    "ConnectionStrings":{
        "ConnectionStringName": ConnectionStringValue
    }
}
```
- Our Connection string value is 
  _Server=localhost;Database=DatabaseName;Uid=root;Pwd=root_


### Install these Packages =>
``` 
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Pomelo.EntityFrameworkCore.MySql
```

### Install & Update dotnet EF tool =>
```
dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef
```

### Scaffold MySQL Database =>
```
dotnet ef dbcontext scaffold Name=ConnectionStringName Pomelo.EntityFrameworkCore.MySql --output-dir Models --context-dir Data --namespace ProjectName.Models --context-namespace ProjectName.Data --context ProjectNameContext -f --no-onconfiguring
```

### Add Service in Program.cs
- Add this code 
```
using Microsoft.EntityFrameworkCore;
using ProjectName.Data;
...
...
builder.Services.AddSwaggerGen();
builder.Services.AddDBContext<ProjectNameContext>(options => 
{
    options.UseMySql(builder.Configuration.GetConnectionString("ConnectionStringName"),
    Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.23-mysql"));
});

var app = builder.Build
...
...
```
This will Add DBContext as a service in our application so that we can use this service in our controller

### Scaffold Controller =>
```
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet tool install -g dotnet-aspnet-codegenerator
dotnet aspnet-codegenerator controller -name ModelNameController -async -api -m ModelName -dc ProjectNameContext -outDir Controllers
```
This will 
- Add NuGet packages required for Scaffolding
- Install the scaffolding Engine
- Scaffold the ModelNameController

### Now Check again by going on *url/swagger* to check if database is connected or not