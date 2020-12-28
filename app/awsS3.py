import os
import boto3

s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
                  aws_secret_access_key=os.environ.get(
                      "AWS_SECRET_ACCESS_KEY"),
                  aws_session_token=os.environ.get("SECRET_KEY")
                  )
BUCKET_NAME = "scarebnb-hosting"
