export async function healthc(req: any, res: any) {
    res.status(200).json({
      'status': 'OK',
      'project': 'Aitex-backend'
    })
  }