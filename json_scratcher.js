// How big each chunk should be
var chunk_size = 1000000;

// Open big json file
var fs = require('fs');
var json_object = JSON.parse(fs.readFileSync('big.json', 'utf8'));
console.log("Big file has", json_object.length, "entries");

var iteration;
var number_of_chunks = Math.ceil(json_object.length/chunk_size);
console.log("Splitting into", number_of_chunks, "files");

for(iteration = 0; iteration < number_of_chunks; iteration++)
{
  // Slice into chunks
  var slice_start = iteration * chunk_size;
  var slice_end   = (iteration + 1) * chunk_size;

  var slice_json_object = json_object.slice(slice_start, slice_end);

  // Save slice json
  let slice_json_string = JSON.stringify(slice_json_object);
  var file_name = 'slice' + iteration + '.json';
  console.log("Writing", file_name, "-", slice_json_object.length, "entries");
  fs.writeFileSync(file_name, slice_json_string);
}
