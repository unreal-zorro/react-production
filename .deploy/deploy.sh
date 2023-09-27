cd ~/production-project
npm run build:prod

rm -rf ~/../var/www/project_name/html
mv ~/project_name/build ~/../var/www/project_name/html
