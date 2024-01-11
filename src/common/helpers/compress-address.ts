function compressAddress(address: string): string {
  return address.slice(0, 5) + "..." + address.slice(-4);
}

export default compressAddress;