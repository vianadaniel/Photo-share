import {S3} from "aws-sdk"


export class S3service{

    private s3 = new S3({
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    })

    public async uploadFile(input: UploadInput): Promise<UploadOutput> {

        const result = await this.s3.upload({
            Bucket: "photos-daniel-share",
            Key: input.name,
            Body: input.file
        }).promise()
        console.log(result)
        return{ 
            link: result.Location
        }


    }



}

interface UploadInput {
    name: string
    file: any
}

interface UploadOutput {
    link: string
}