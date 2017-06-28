fs = require('fs')

let githubData

fs.readFile('github-data.json', 'utf8', (err, serializedData) => {
  if (err) {
    return console.log(err)
  }
  githubData = JSON.parse(serializedData)
  console.log(githubData[0].size);
  processData();
})

// your code, here
function processData()
{
    let repo_size = () =>
    {
      console.log(githubData.length);
    };

    let largest_size = () =>
    {
      let size_array = [];
      for (let i = 0; i < githubData.length; i++)
      {
        size_array.push(githubData[i].size);
      }
      let max = Math.max.apply(Math,size_array);
      console.log(max);
    };

    let largest_watchers = () =>
    {
      let size_array = [];
      for (let i = 0; i < githubData.length; i++)
      {
        size_array.push(githubData[i].watchers);
      }
      let max = Math.max.apply(Math,size_array);
      console.log(max);
    };

    let created_recently = () =>
    {
      let size_array = [];
      for (let i = 0; i < githubData.length; i++)
      {
        size_array.push(new Date(githubData[i].created_at));
      }
      //console.log(size_array);
      let max = new Date(Math.max.apply(null,size_array));
      console.log(max);
    };

    let created_oldest = () =>
    {
      let size_array = [];
      for (let i = 0; i < githubData.length; i++)
      {
        size_array.push(new Date(githubData[i].created_at));
      }
      //console.log(size_array);
      let min = new Date(Math.min.apply(null,size_array));
      console.log(min);
    };

    let name_desc = () =>
    {
      let size_array = [];
      for (let i = 0; i < githubData.length; i++)
      {
        console.log(`${githubData[i].name} : ${githubData[i].description}`)
      }
    };
    repo_size();
    largest_size();
    largest_watchers();
    created_recently();
    created_oldest();
    name_desc();
}
