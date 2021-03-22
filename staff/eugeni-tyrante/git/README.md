# Git Commands

## Iniciar proyecto

- `git init` *Inicia un repositorio local de Git*
- `git clone [blabla://git@github.com/[username]/[repository-name].git]` *Crea una copia local de un repositorio remoto*

## Comandos para trabajar con Git on/offline

### Commits y cajones
- `git --version` *Para ver con qué versión está funcionando git*
- `git status`	*Check status / Estado de los documentos (si están commiteados, added, etc)
- `git add XXX`	*Añade el archivo al staging pre-commit*
- `git add -a`	*Añade todos los archivos al staging pre-commit*
- `git commit -m "XXX"` *Realizar un commit acompañado de un mensaje en imperativo*
- `git rm -r XXX` *Elimina el archivo especificado*
- `git log` *Permite ver los logs de los commits realizados*
### Online & Sharing
- `git push` *Permite subir el commit al GitHub*
- `git push origin [Nombre branch]`	*Pushea la branch a tu repositorio remoto*
- `git push -u origin [Nombre branch]` *Pushea cambios a tu repositorio remoto*
- `git push origin --delete [Nombre branch]` *Deletea la branch remota*
- `git pull` *Update tu repositorio local al commit más reciente de una upstream*
- `git pull origin [Nombre branch]`	*Extraes cambios del repositorio remoto*
- `git remote add origin [blabla://github.com/[username]/[repository-name].git] ` *Añades un repositorio remoto desde tu origin*
- `git fetch` *Extrae datos del repositorio remoto sin modificar tu repositorio local*

## Branches y Merging

- `git branch` *Aparece una lista de los branches con un (*) *para marcar en la cual te encuentras* 
- `git branch -a` *Muestra todas las ramas tanto locales como remotas*
- `git branch XXX`	*Crea una branch nueva con el nombre especificado*
- `git branch -d XXX`	*Deletea la branch especificada*
- `git checkout -b XXX` *Crea una branch y te cambia a ella*
- `git checkout -b XXX origin/XXX` *Clona una branch remota y cambias a ella*
- `git branch -m [Nombre original] [nuevo nombre]`	*Renombra una branch local*
- `git checkout XXX` *Cambia a la branch especificada*
- `git checkout -`	*Cambia a la última branch comprobada*
- `git checkout -- XXX`	*Descarta cambios en un archivo especificado*
- `git merge XXX` *Mergea la branch especificada en la branch activa*
- `git merge [branch] [branch objetivo]` *Mergea una branch en otra*