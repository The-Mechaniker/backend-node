export class Util {
  public static encodeCosmosDBPassword(uri: string): string {
    // NOTE: ConnectionString - mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database.collection][?options]]
    console.log(uri.replace('=', '%3D'));
    return uri.replace('=', '%3D');
  }
}
