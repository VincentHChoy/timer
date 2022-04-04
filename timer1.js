const interval = process.argv.slice(2).map(x => x*1000)

if(interval !== undefined){
for (const time of interval) {
  if(typeof time === 'number' && time > 0){
  setTimeout(()=>{
    process.stdout.write('\x07');
  },time)}
}
}