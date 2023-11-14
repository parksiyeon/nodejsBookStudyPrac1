const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://siyeon1020:wkdusehd24@cluster0.itvbjtr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {useNewUrlParser: true});

async function main() {
    try {
        await client.connect();

        console.log('MongoDB 접속 성공');

        const collection = client.db('test').collection('person');

        await collection.insertOne({name: 'siyeon', age: 26});
        console.log('문서 추가 완료');

        const documents = await collection.find({name: 'siyeon'}).toArray();
        console.log('찾은 문서:', documents);

        await collection.updateOne({name: 'siyeon'}, {$set: {age:27} });
        console.log('문서 업데이트');

        const updatedDocuments = await collection.find({name: 'siyeon'}).toArray();
        console.log('갱신된 문서 :', updatedDocuments);

        await client.close();
    } catch(err){
        console.error(err);
    }
}

main();