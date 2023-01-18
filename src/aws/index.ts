import * as AWS from "aws-sdk";

export type ImageObject = { [key: string]: string };

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
});

const s3 = new AWS.S3();

export const generatePresignedUrl = async (
  bucket: string,
  key: string
): Promise<string> => {
  const params = {
    Bucket: bucket,
    Key: key,
    Expires: 60*60,
  };
  return await s3.getSignedUrlPromise("getObject", params);
};

export const getImageMap = async (bucket: string, path: string) => {
  const params = {
    Bucket: bucket,
    Delimiter: path,
  };
  const data = await s3.listObjects(params).promise();
  let images: ImageObject = {};

  if (isDataContent(data)) {
    const keys = data.Contents.map((o: AWS.S3.Object) => o.Key);
    for (const key of keys) {
      if (key) {
        const url = await generatePresignedUrl(bucket, key);
        const prefix = path.substring(1) + "/";
        const modifiedKey = key.replace(prefix, "");
        images[modifiedKey] = url;
      }
    }
  }
  return images;
};

// Type Guard for data contents
function isDataContent(
  data: AWS.S3.ListObjectsOutput
): data is { Contents: AWS.S3.Object[] } {
  return data !== undefined && data.Contents !== undefined;
}
